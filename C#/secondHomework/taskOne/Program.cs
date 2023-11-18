int n1 = int.Parse(Console.ReadLine());
int n2 = int.Parse(Console.ReadLine());
char symbol = char.Parse(Console.ReadLine());
int result;
if (symbol == '*')
{
    result = n1 * n2;
}
else if(symbol == '+')
{
    result = n1 + n2;
}
else
{
    result = n1 - n2;
}
Console.WriteLine(result);