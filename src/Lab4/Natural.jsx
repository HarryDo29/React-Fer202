import orchids from '../Lab12/ListOfOrchilds'
import PresentAll from '../Lab12/PresentAll';

const Natural = () => {
    const naturalOrchilds = orchids.filter(orchild => orchild.isNatural === true);
    console.log(naturalOrchilds);

    return (
        <PresentAll orchidsList={naturalOrchilds} />
    )
}

export default Natural