import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import Meta from "../components/Meta"
import { getSettings } from "../redux/actions/SettingActions"

const Example = () => {
	// page content
	const settingList = useSelector(state => state.settings);
	const dispatch = useDispatch();
	const pageTitle = 'Example'
	const pageDescription = 'welcome to react bootstrap template'

	useEffect(() => {
		dispatch(getSettings())
	}, [])
	console.log(settingList)
	return (
		<Fragment>

			<div>
				<Meta title={pageTitle} />
				<Header head={pageTitle} description={pageDescription} />
			</div>
			<div className="container">
				<div className="row justify-content-center">

					<div className="col-md-8">
						{
							settingList?.map(value => (
								<>
								<div className="card">
									<div className="card-header">{value.title}</div>
									<div className="card-body">{value.body}</div>
								</div>

								<br />
								</>
							))}
					</div>
				</div>
			</div>
		</Fragment>
	)
}
export default Example
