var base = 0;
var income = 0;
var next = "y";
do
{
	base = Number(prompt("Enter Base Tax"));
	while(test(base,0.00,1000.00) == false)
	{
		base = Number(prompt("ERROR! Enter Base Tax in the range [ 0.00, 1000.00]:"));
	}
	income = Number(prompt("Enter Income"));
	while(test(income,0.00,10000000.00) == false)
	{
		income = Number(prompt("ERROR! Enter Income in the range [ 0.00, 10000000.00]:"));
	}
	alert(result(base,income));
	next = prompt("Enter next income? Y/N");
}while(next=="N" || next!=="n");

function test(input,low,high)
{
	if(input>=low && input<=high)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function result(base,income)
{
	var extra = 0.00;
	if(income>80000)
		{
			extra = 40000*0.15 + 40000*0.3 + eval(income - 80000)*0.5;
		}
	else if(income<=80000 && income > 40000)
		{
			extra = 40000*0.15 + eval(income-40000)*0.3;
		}
	else
		{
			extra = income*0.15;
		}
	return "income is $"+ income + ", \nThe base tax is $" + base +",\nextra tax is $" + extra + ",\ntotal tax is $" + eval(base+extra);
}