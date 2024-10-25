import { useState, useRef, useEffect } from 'react';

type MultimediaDivProps = {

};

type MultimediaDivPropsProps = { multiediaDivProps: MultiediaDivProps; };

const multimediaDiv : React.FC<> = () => {
    return (
      <div className="w-full h-full rounded-xl overflow-hidden bg-sky-200/50"></div>
    );
}
export default multimediaDiv;

