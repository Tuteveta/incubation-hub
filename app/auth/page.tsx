"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

// Import from your existing Amplify setup
// Adjust the import path if your project uses a different structure
import { signIn, signUp, confirmSignUp, resetPassword } from 'aws-amplify/auth';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Sign up
        const { isSignUpComplete, userId, nextStep } = await signUp({
          username: email,
          password,
          options: {
            userAttributes: {
              email,
            },
          },
        });

        console.log('Sign up result:', { isSignUpComplete, userId, nextStep });
        
        if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
          setSuccess("Account created! Please check your email for verification code.");
          // You can add a verification code input here or redirect to verification page
        } else if (nextStep.signUpStep === 'DONE') {
          setSuccess("Account created successfully! You can now sign in.");
          setIsSignUp(false);
        }
      } else {
        // Sign in
        const { isSignedIn, nextStep } = await signIn({
          username: email,
          password,
        });

        console.log('Sign in result:', { isSignedIn, nextStep });

        if (isSignedIn) {
          setSuccess("Sign in successful! Redirecting...");
          setTimeout(() => {
            router.push('/dashboard');
          }, 1000);
        } else {
          // Handle MFA or other next steps
          console.log('Next step:', nextStep);
        }
      }
    } catch (err: any) {
      console.error('Authentication error:', err);
      
      // User-friendly error messages
      let errorMessage = "An error occurred. Please try again.";
      
      if (err.name === 'UserNotFoundException') {
        errorMessage = "No account found with this email.";
      } else if (err.name === 'NotAuthorizedException') {
        errorMessage = "Incorrect email or password.";
      } else if (err.name === 'UsernameExistsException') {
        errorMessage = "An account with this email already exists.";
      } else if (err.name === 'InvalidPasswordException') {
        errorMessage = "Password must be at least 8 characters with uppercase, lowercase, and numbers.";
      } else if (err.name === 'UserNotConfirmedException') {
        errorMessage = "Please verify your email before signing in.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }

    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const output = await resetPassword({ username: email });
      console.log('Reset password output:', output);
      setSuccess("Password reset code sent to your email!");
    } catch (err: any) {
      console.error('Reset password error:', err);
      setError(err.message || "Failed to send reset code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Archivo', sans-serif;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
        }

        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
          transform: translateY(-2px);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .auth-card {
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
        }

        .input-field {
          transition: all 0.2s ease;
        }

        .input-field:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          outline: none;
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Incubation Hub</span>
            </Link>
            
            <Link href="/">
              <Button variant="ghost" className="text-sm font-medium">
                ← Back to home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* AUTH CONTENT */}
      <div className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <div className="auth-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-sm text-gray-600">
                {isSignUp 
                  ? "Start your startup journey today" 
                  : "Sign in to continue to Incubation Hub"
                }
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-green-600">{success}</p>
              </div>
            )}

            {/* Sign In/Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="input-field w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    disabled={isLoading}
                    className="input-field w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                      disabled={isLoading}
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button 
                    type="button" 
                    onClick={handleForgotPassword}
                    disabled={isLoading}
                    className="text-blue-600 hover:underline font-medium disabled:opacity-50"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isLoading}
                className="btn-primary text-white w-full py-3 font-semibold group"
              >
                {isLoading 
                  ? (isSignUp ? "Creating account..." : "Signing in...") 
                  : (isSignUp ? "Create account" : "Sign in")
                }
                {!isLoading && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>

            {/* Toggle Sign In/Sign Up */}
            <div className="text-center text-sm text-gray-600">
              <p>
                {isSignUp ? "Already have an account? " : "Don't have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError("");
                    setSuccess("");
                  }}
                  disabled={isLoading}
                  className="text-blue-600 hover:underline font-medium disabled:opacity-50"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </p>
            </div>

            {/* Terms */}
            {isSignUp && (
              <p className="mt-6 text-xs text-center text-gray-500">
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}