namespace oop.demo;

/// <summary>
/// 人的類別
/// </summary>
public class Person : BaseClass
{
    /// <summary>
    /// 姓名
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// 年齡
    /// </summary>
    public int Age { get; set; }

    /// <summary>
    /// 人的建構子
    /// </summary>
    public Person()
    {
        Name = "無名";
        Age = 0;
    }

    /// <summary>
    /// 個人興趣
    /// </summary>
    /// <returns></returns>
    public virtual string hobby()
    {
        return "無任何興趣";
    }

    /// <summary>
    /// 顯示個人資訊
    /// </summary>
    /// <returns></returns>
    public string PersonInfo()
    {
        string str_hobby = hobby();
        return $"姓名：{Name} 年齡：{Age} 興趣：{str_hobby}";
    }
    override
}
