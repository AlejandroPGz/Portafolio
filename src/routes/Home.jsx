import { Presentation } from './sections/presentation';
import { Skills } from './sections/Skills';
import { Proyects } from './sections/Proyects';
import { Education } from './sections/Education';

export const Home = () => {
    return (
        <>
        <Presentation />
        <Skills/>
        <Proyects />
        <Education />
        </>
    )
}
