import { Form } from "@/components/Form";

export default function Hire() {
  return (
    <section>
      <div className="flex flex-col items-center py-32 select-none">
        <div className="flex flex-col gap-10">
          <span className="text-5xl md:text-6xl text-center font-semibold">
            Hire Me
          </span>
        </div>

        <div>
          <Form />
        </div>
      </div>
    </section>
  );
}
