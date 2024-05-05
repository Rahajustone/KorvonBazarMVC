using System;
using System.Linq.Expressions;

namespace KorvonBazar.MVC.Core.Repositories;

public interface IRepository<TEntity> where TEntity : class
{
    TEntity Get(int id);
    IEnumerable<TEntity> GetAll();
    IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);

    // This method was not in the videos, but I thought it would be useful to add.
    TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);

    Task<TEntity> SingelOrDefaultAsync(Expression<Func<TEntity, bool>> predicate);
    Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> predicate);

    void Add(TEntity entity);
    void AddRange(IEnumerable<TEntity> entities);

    void Remove(TEntity entity);
    void RemoveRange(IEnumerable<TEntity> entities);
}
