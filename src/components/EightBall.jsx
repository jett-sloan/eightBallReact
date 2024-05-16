import React from "react";
const EightBall = (props) => {
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const reset = () => {
    setQuestion("Ask anything");
    setAnswer("");
    setLoading(false);
    setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const question = props.question;
      setQuestion(question);
      const data = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ];
      const answer = data[Math.floor(Math.random() * data.length)];
      setAnswer(answer);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Magic 8 Ball</h1>

        <form onSubmit={handleSubmit}>
          <div className="eightBall">
            <div className="circle" style={{ backgroundColor: answer.color }}>
              <div
                className="innercircle"
                style={{ backgroundColor: answer.color }}
              >
                <div className="eight" onClick={handleSubmit}>
                  {" "}
                  {answer && <p>{answer.msg}</p>}{" "}
                  {question && <p>{question}</p>}
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </form>
        <button onClick={reset}>Reset</button>
        {error && <p className="error">{error.message}</p>}
      </div>
    </div>
  );
};

export default EightBall;
