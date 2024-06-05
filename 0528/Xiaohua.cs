/// <summary>
/// 李小華的類別
/// </summary>
public class Xiaohua : Person
{
    /// <summary>
    /// 李小華的建構子
    /// </summary>
    public Xiaohua()
    {
        Name = "李小華";
        Age = 16;
    }
    /// <summary>
    /// 李小華的興趣
    /// </summary>
    /// <returns></returns>
    public override string hobby()
    {
        return "看電影";
    }
}
