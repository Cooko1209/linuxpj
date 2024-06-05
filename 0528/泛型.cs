internal class Program
{
    private static void Main(string[] args)
    {
        MyEvent<string>("Hello");
        MyEvent<int>(3);
        MyEvent<double>(3.14);
    }

    static void MyEvent<T>(T t)
    {
        Console.WriteLine("您傳入的型別：{0} 值：{1}", t.GetType(), t);
    }
}
