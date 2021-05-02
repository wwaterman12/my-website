import axios from "axios";

export default async () => {
  const response = await axios.get(
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/programming/1"
  );
  return {
    setup: response.data?.[0]?.setup,
    punchline: response.data?.[0]?.punchline,
  };
};
