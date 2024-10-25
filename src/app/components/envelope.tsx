type EnvelopeProps = {
    title: string;
    image: string;
    description: string;
};
type EnvelopePropsProps = { envelopeprops: EnvelopeProps; };

const envelope: React.FC<EnvelopePropsProps> = ({envelopeprops}:EnvelopePropsProps) => {
    let {title, description, image} = envelopeprops;
    let bgStyle = {
      backgroundImage: 'url(' + image + ')',
    };
    // todo: turn the two container divs into a wrapper component
    return (
        <div className="min-h-72 w-full" style={bgStyle}>
          <div className="min-h-72 w-full p-6 from-slate-700 bg-gradient-to-t">
            <span><h3>{title}</h3></span>
            <br/>
            <br/>
            <br/>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default envelope

