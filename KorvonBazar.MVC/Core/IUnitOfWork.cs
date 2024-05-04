using System;
namespace KorvonBazar.MVC.Core;

public interface IUnitOfWork : IDisposable
{
    int Complete();
}

