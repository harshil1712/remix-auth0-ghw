import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Adding Authentication to your Web App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async() => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
  const response = await fetch(URL);
  const result = await response.json();
  return json({pokemons: result.results})
}

export default function Index() {
  const {pokemons} = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Adding Authentication to your Web App</h1>
      <Link to='/auth/login'>Go to Login Page</Link>
      <div>
        <ul>
          {pokemons.map(pokemon => {
            return (
              <li key={pokemon.name}>
                <a href={pokemon.url}>{pokemon.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <Form action='/world' method="POST">
        <input type="text" name="firstName"/>
        <button value="submit">Submit</button>
      </Form>
    </div>
  );
}
