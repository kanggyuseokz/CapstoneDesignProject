import React, { useState } from 'react';

export default function LoginRegister() {
  const [activeTab, setActiveTab] = useState('signup');
  const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      });
      const result = await res.json();
      if (result.success) alert('회원가입 성공!');
      else setError(result.error);
    } catch (err) {
      setError('회원가입 중 오류 발생');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const result = await res.json();
      if (result.success) alert('로그인 성공!');
      else setError(result.error);
    } catch (err) {
      setError('로그인 중 오류 발생');
    }
  };

  return (
    <div className="form" style={{ maxWidth: '600px', margin: 'auto', padding: '40px', backgroundColor: '#223', color: '#fff' }}>
      <ul className="tab-group" style={{ display: 'flex', marginBottom: '30px', listStyle: 'none', padding: 0 }}>
        <li className={`tab ${activeTab === 'signup' ? 'active' : ''}`} style={{ flex: 1 }}>
          <button onClick={() => handleTabChange('signup')} style={{ width: '100%', padding: '10px', backgroundColor: activeTab === 'signup' ? '#1ab188' : '#555', color: '#fff' }}>Sign Up</button>
        </li>
        <li className={`tab ${activeTab === 'login' ? 'active' : ''}`} style={{ flex: 1 }}>
          <button onClick={() => handleTabChange('login')} style={{ width: '100%', padding: '10px', backgroundColor: activeTab === 'login' ? '#1ab188' : '#555', color: '#fff' }}>Log In</button>
        </li>
      </ul>

      {activeTab === 'signup' && (
        <form onSubmit={handleSignupSubmit}>
          <h2>Sign Up</h2>
          <input name="firstName" placeholder="First Name" value={signupData.firstName} onChange={handleSignupChange} required />
          <input name="lastName" placeholder="Last Name" value={signupData.lastName} onChange={handleSignupChange} required />
          <input name="email" placeholder="Email" type="email" value={signupData.email} onChange={handleSignupChange} required />
          <input name="password" placeholder="Password" type="password" value={signupData.password} onChange={handleSignupChange} required />
          <button type="submit">회원가입</button>
        </form>
      )}

      {activeTab === 'login' && (
        <form onSubmit={handleLoginSubmit}>
          <h2>Log In</h2>
          <input name="email" placeholder="Email" type="email" value={loginData.email} onChange={handleLoginChange} required />
          <input name="password" placeholder="Password" type="password" value={loginData.password} onChange={handleLoginChange} required />
          <button type="submit">로그인</button>
        </form>
      )}

      {error && <p style={{ color: 'tomato' }}>{error}</p>}
    </div>
  );
}
