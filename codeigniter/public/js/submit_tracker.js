var counter = 0;
function count_submission(id)
{
	counter++;
	id.first().html() = counter;
	console.log("counter: "+counter);
}