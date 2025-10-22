"use client";

import { useState, useEffect } from "react";
import { FileText, Mail, Calendar, User, MessageSquare, CheckCircle, Clock } from "lucide-react";

interface TermsQuestion {
  id: string;
  name: string;
  email: string;
  question: string;
  section: string;
  timestamp: string;
  type: string;
  status: string;
}

export default function TermsQuestionsPage() {
  const [questions, setQuestions] = useState<TermsQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await fetch('/api/terms-questions');
      const data = await res.json();
      if (data.success) {
        setQuestions(data.questions.reverse()); // Show newest first
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    // This would typically update the status in the database
    setQuestions(prev => 
      prev.map(q => q.id === id ? { ...q, status } : q)
    );
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-2 flex items-center">
            <FileText className="mr-4 h-10 w-10 text-primary" />
            Terms & Conditions Questions
          </h1>
          <p className="text-slate-600 text-lg">
            Manage customer questions about terms and conditions
          </p>
        </div>
        <div className="bg-gradient-to-r from-orange-100 to-red-100 text-primary px-6 py-3 rounded-full text-lg font-semibold">
          {questions.length} Total Questions
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="admin-stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Total Questions
            </h3>
            <div className="text-3xl font-black text-slate-900">{questions.length}</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Pending
            </h3>
            <div className="text-3xl font-black text-slate-900">
              {questions.filter(q => q.status === 'pending').length}
            </div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Resolved
            </h3>
            <div className="text-3xl font-black text-slate-900">
              {questions.filter(q => q.status === 'resolved').length}
            </div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="admin-card p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Recent Questions</h2>
        </div>
        
        {questions.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No Questions Yet</h3>
            <p className="text-slate-500">Questions from the terms page will appear here.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200">
            {questions.map((question) => (
              <div key={question.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{question.name}</h3>
                      <div className="flex items-center text-sm text-slate-600 space-x-4">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {question.email}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(question.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      question.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {question.status === 'pending' ? 'Pending' : 'Resolved'}
                    </span>
                    {question.section && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        {question.section}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-slate-700 leading-relaxed">{question.question}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => window.location.href = `mailto:${question.email}`}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all text-sm font-semibold"
                    >
                      Reply via Email
                    </button>
                    {question.status === 'pending' && (
                      <button
                        onClick={() => updateStatus(question.id, 'resolved')}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-90 transition-all text-sm font-semibold"
                      >
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}