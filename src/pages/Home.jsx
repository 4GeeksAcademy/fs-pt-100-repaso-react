import { Card } from "../components/card.jsx";
import { Search } from "../components/search.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<Search/>
			<div className="row">
				{store.digimons?.content?.map(el => <Card key={el.id} name={el.name} image={el.image} />)}
			</div>
		</div>
	);
}; 