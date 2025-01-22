import Link from "next/link"
import { Button } from "../ui/button"


const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center text-center">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We help you find trusted vendors!
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Connecting you with top-rated instagram vendors for all your needs.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero