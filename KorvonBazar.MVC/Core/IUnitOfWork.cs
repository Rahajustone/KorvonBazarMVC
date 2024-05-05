using System;
using KorvonBazar.MVC.Core.Repositories;

namespace KorvonBazar.MVC.Core;

public interface IUnitOfWork : IDisposable
{
    public IUserRepository User { get;}

    int Complete();
}

