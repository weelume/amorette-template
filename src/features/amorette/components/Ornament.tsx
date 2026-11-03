import { image } from '../content/data';
export function Ornament() { return <img className="am-divider" src={image('wwuDzhrGToEmPSKvmsxeeQpwE.png')} alt=""/>; }
export function Corners() { return <div className="am-corners" aria-hidden>{['Amx62WoInbzJzDsbdRs7a0eQeuo.webp', 'jYY9ArR3LiBzUyjfCgawYdRrbc.webp', 'pNja7LTG97OrupWAitUehiQPQ.webp', 'GHeiyL8juJfdP0UUoCd1PhZSr4.webp'].map((name, i) => <img key={name} className={'am-corner-' + i} src={image(name)} alt=""/>)}</div>; }
