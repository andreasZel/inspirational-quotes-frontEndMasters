import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[] | undefined>();

  useEffect(() => {
    fetchQuotes(1).then(setQuotes);
  }, []);

  function onSubmit(numberOfQuotes: number) {
    fetchQuotes(numberOfQuotes).then(setQuotes);
  }

  if (!quotes) return <Loading />;
  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      <Quotes onSubmit={onSubmit}>
        {quotes.map((quote) => <InspirationalQuote key={quote.id} content={quote.content} source={quote.source} />)}
      </Quotes>
    </main>
  );
};

export default Application;
