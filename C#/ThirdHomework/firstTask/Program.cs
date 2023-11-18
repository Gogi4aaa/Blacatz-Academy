Console.WriteLine("Choice from menu:");
Console.WriteLine("1. Insert new car");
Console.WriteLine("2. Show cars");
Console.WriteLine("0. Exit");

string input = Console.ReadLine();
int currentInput;
while (input != "0")
{
    currentInput = int.Parse(input);
    if(currentInput == 1)
    {
        Console.WriteLine("New car added!");
        input = Console.ReadLine();
    }
    else if(currentInput == 2)
    {
        Console.WriteLine("Mercedes, Bmw, Audi available!");
        break;
    }
    else if(currentInput == 0)
    {
        Console.WriteLine("Goodbye!");
        input= Console.ReadLine();
    }
    else
    {
        Console.WriteLine("Wrong choice!");
        input= Console.ReadLine();
    }
}