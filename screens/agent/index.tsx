import Layout from "@/components/Layout";
import Hero from "./hero";

export default function AgentPage({ member }: any) {
  return (
    <Layout>
      <Hero member={member} />
    </Layout>
  );
}
