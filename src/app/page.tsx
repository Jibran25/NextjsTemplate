// src/app/page.tsx
import Layout from '@/components/Layout';
import React from 'react';


const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Main Page</h1>
        <p className="text-lg">This is the main page of the website.</p>
      </div>
    </Layout>
  );
};

export default HomePage;
