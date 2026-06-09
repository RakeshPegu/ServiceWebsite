type Name = string
function TechnologyCard({name}:{name:Name}):React.ReactElement{
    return(
        <div className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700">
            {name}

        </div>
    )
}
export default TechnologyCard;