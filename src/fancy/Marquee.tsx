const TECH = [
  'Python', 'LangGraph', 'LangChain', 'RAG', 'MCP', 'FastAPI', 'PyTorch',
  'Postgres', 'pgvector', 'Faiss', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
  'OpenAI', 'Hugging Face', 'Multi-agent systems',
]

export function Marquee() {
  const items = [...TECH, ...TECH]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i}>{t}<span>◆</span></span>
        ))}
      </div>
    </div>
  )
}
