int X = int.Parse(Console.ReadLine());
int Y = int.Parse(Console.ReadLine());

if(X > Y)
{
    Console.WriteLine($"Predpriqtieto e na pechalba {X - Y}");
}
else if(Y > X)
{
    Console.WriteLine($"Predpriqtieto e na zaguba {Y - X}");
}
else
{
    Console.WriteLine("Breakeven");
}