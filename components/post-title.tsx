export default function PostTitle({ children }) {
  return (
    <h1
      className="zoom__title"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
