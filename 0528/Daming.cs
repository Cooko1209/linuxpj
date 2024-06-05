/// <summary>
/// 王大明的類別
/// </summary>
public class Daming : Person
{
    /// <summary>
    /// 王大明的建構子
    /// </summary>
    public Daming()
    {
        Name = "王大明";
        Age = 30;
    }
    /// <summary>
    /// 王大明的興趣
    /// </summary>
    /// <returns></returns>
    public override string hobby()
    {
        return "打籃球";
    }
}
