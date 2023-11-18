double number;
double currentNumber;
double slab = 0;
double sreden = 0;
double dobur = 0;
double mnogoDobur = 0;
double Otlichen = 0;

for (int i = 0; i < 5; i++)
{
    number = double.Parse(Console.ReadLine());
    if (number < 3)
    {
        slab = number;
    }
    else if(number >= 3 && number <= 3.49)
    {
        sreden = number;
    }
    else if(number >= 3.50 && number <= 4.49)
    {
        dobur = number;
    }
    else if (number >= 4.50 && number <= 5.49)
    {
        mnogoDobur = number;
    }
    else if (number > 5.50)
    {
       Otlichen = number;
    }
}
if(Otlichen > 5.50 )
{
    Console.WriteLine("Otlichen");
}
else if (mnogoDobur >= 4.50 && mnogoDobur <= 5.49)
{
    Console.WriteLine("Mnogo Dobur");
}
else if (dobur >= 3.50 && dobur <= 4.49)
{
    Console.WriteLine("Dobur");
}
else if (sreden >= 3 && sreden <= 3.49)
{
    Console.WriteLine("sreden");
}
else if (slab < 3)
{
    Console.WriteLine("slab");
}
