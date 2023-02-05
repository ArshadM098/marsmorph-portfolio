const Header = () => {
    return (
      <header className="bg-gray-900 p-6">
        <h1 className="text-white text-2xl">My Gmail-like Webpage</h1>
      </header>
    );
  };

const emails = [
    {
      id: 1,
      subject: "Important news",
      body: "This is the body of the email",
      from: "sender@example.com",
      date: "2022-12-01"
    },
    {
      id: 2,
      subject: "Another important email",
      body: "This is another body of the email",
      from: "sender2@example.com",
      date: "2022-12-02"
    }
  ];

  const Email = ({ email }) => {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium">{email.subject}</h3>
        <p className="text-gray-600">{email.body}</p>
        <p className="text-gray-600">
          From: {email.from} on {email.date}
        </p>
      </div>
    );
  };
  
  const EmailList = () => {
    return (
      <div className="mx-auto mt-10">
        {emails.map(email => (
          <Email key={email.id} email={email} />
        ))}
      </div>
    );
  };

  const Home = () => {
    return (
      <div className="bg-gray-200 p-10">
        <Header />
        <main className="container mx-auto mt-10">
          <EmailList />
        </main>
      </div>
    );
  };

  export default Home;
  
  