using System;
namespace KorvonBazar.Domain.Interfaces;

public interface IUnitOfWork
{
    Task<int> CommitAsync();
}

