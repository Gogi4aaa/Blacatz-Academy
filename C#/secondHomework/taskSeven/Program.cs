string input = Console.ReadLine();
if (input == "University")
{
    Console.WriteLine("Diploma");
}
else if (input == "Academy")
{
    Console.WriteLine("Certificate");
}
else if (input.ToUpper() == "CSHARP")
{
    Console.WriteLine("ASP.NET Core");
}
else if (input.ToUpper() == "JAVA")
{
    Console.WriteLine("Spring Boot");
}
else if (input.ToUpper() == "PHP")
{
    Console.WriteLine("Laravel Framework");
}