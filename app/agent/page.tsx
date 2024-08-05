import AgentPage from "@/screens/agent";

export default function Agent({ searchParams }: { searchParams: any }) {
  const member = JSON.parse(searchParams.member);

  return <AgentPage member={member} />;
}
