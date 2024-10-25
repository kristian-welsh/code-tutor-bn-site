type CardProps = {
    title: string;
    image: string;
    description: string;
};
type CardPropsProps = { cardprops: CardProps; };

const card: React.FC<CardPropsProps> = ({cardprops}:CardPropsProps) => {
    let {title, description, image} = cardprops;
    return (
        <div className="w-96 rounded-xl overflow-hidden shadow-lg p-8 bg-slate-500/20">
          <h3>{title}</h3>
          <div className="py-5 flex justify-center items-center"><img src={image}></img></div>
          <p>{description}</p>
        </div>
    );
}

export default card

