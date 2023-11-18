int input = int.Parse(Console.ReadLine());
int sum = 0;
while(input != 0)
{
    sum += input;
    input = int.Parse(Console.ReadLine());
}
Console.WriteLine(sum);