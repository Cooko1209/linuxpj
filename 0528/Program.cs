internal class Program
{
    private static void Main(string[] args)
    {
        Daming daming = new Daming();
        Xiaohua xiaohua = new Xiaohua();
        Console.WriteLine(daming.PersonInfo());
        Console.WriteLine(xiaohua.PersonInfo());
    }
}
