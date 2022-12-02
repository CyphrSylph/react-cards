import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import BlueImage from './images/blue.png';
import GreenImage from './images/green.png';
import PinkImage from './images/pink.png';

function App(){
	return(
        <div>
            <section className="hero is-primary">
                <div className='hero-body'>
                    <p className='title'>The Mushroom Circle</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                            title = "Amanita" 
                            handle="@PinkAgaric01" 
                            image={PinkImage}
                            content="Fungi classification and posioning prevention" />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                            title = "Stropharia" 
                            handle="@Verdigris_Slime"  
                            image={GreenImage}
                            content="Green tips for crystalline acanthocytes" />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                            title = "Lactarius" 
                            handle="@IndigoMilk90" 
                            image={BlueImage}
                            content="Edible mycology for foragers and apothecaries" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
	);
}

export default App;