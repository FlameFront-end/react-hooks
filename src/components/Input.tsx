import useInput from "../hooks/useInput";

const Input = () => {
  const username = useInput("");
  const password = useInput("");

  return (
    <>
      <input {...username} type="text" placeholder="Username" />
      <input {...password} type="password" placeholder="Password" />

      <button onClick={() => console.log(username.value, password.value)}>
        log
      </button>
    </>
  );
};

export default Input;
