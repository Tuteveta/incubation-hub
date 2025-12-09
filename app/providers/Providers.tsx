'use client';

import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '@/amplify_outputs.json';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      // Configure Amplify with Gen 2 outputs
      Amplify.configure(outputs, { 
        ssr: true 
      });
      
      console.log('✅ Amplify configured successfully');
      console.log('Auth config loaded:', {
        userPoolId: outputs.auth.user_pool_id ? '✅ Present' : '❌ Missing',
        region: outputs.auth.aws_region ? '✅ Present' : '❌ Missing',
        clientId: outputs.auth.user_pool_client_id ? '✅ Present' : '❌ Missing'
      });
    } catch (error) {
      console.error('❌ Error configuring Amplify:', error);
    }
  }, []);

  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  );
}