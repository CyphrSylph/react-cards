import ProfileCard from './ProfileCard';

function App(){
	return(
        <div>
            <div>The Mushroom Circle</div>
            <ProfileCard title = "Amanita" handle="@PinkAgaric01"/>
            <ProfileCard title = "Stropharia" handle="@Verdigris_Slime"/>
            <ProfileCard title = "Lactarius" handle="@IndigoMilk90"/>
        </div>
	);
}

export default App;