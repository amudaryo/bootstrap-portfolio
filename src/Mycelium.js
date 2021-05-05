import Template from './components/Template';
import Button from 'react-bootstrap/Button'

export default function Mycelium() {
  const title = `title for Mycelium`;
  const text = `... text for Mycelium`;
  const img = './wood-wide-web.jpg';

  const Other = (
    <div className="network">
      <Button href="https://www.github.com/amudaryo/"> My GitHub</Button>
      <Button href="https://www.linkedin.com/in/daria-muracheva-49b3a11b3">My Linkedin</Button>
    </div>
  )

  return <Template title={title} text={text} image={img} other={Other}/>;
}
