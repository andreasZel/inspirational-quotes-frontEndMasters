import { ReactNode } from "react";

const Quotes = ({ children, onSubmit }: QuotesProps) => {

  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const numberOfQuotes = formData.get("number-of-quotes-to-load");
          onSubmit(Number(numberOfQuotes));
          form.reset();
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            name="number-of-quotes-to-load"
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;

type QuotesProps = {
  children: ReactNode,
  onSubmit: (numberOfQuotes: number) => void
}