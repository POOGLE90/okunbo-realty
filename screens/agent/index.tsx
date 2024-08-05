import Layout from "@/components/Layout";
import Hero from "./hero";
import Testimonials from "./testimonials";

export default function AgentPage({ member }: any) {
  return (
    <Layout>
      <Hero member={member} />
      <Testimonials />
    </Layout>
  );
}
