import Layout from "@/components/Layout";
import Hero from "./hero";
import Testimonials from "./testimonials";
import Contact from "./contact";

export default function AgentPage({ member }: any) {
  return (
    <Layout>
      <Hero member={member} />
      <Testimonials />
      <Contact member={member} />
    </Layout>
  );
}
