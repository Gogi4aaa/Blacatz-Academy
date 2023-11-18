int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
int c = int.Parse(Console.ReadLine());
if(a == b && b == c && a == c)
{
    Console.WriteLine("The triangle is isosceles."); 
}
else
{
    Console.WriteLine("The triangle is not isosceles.");
}