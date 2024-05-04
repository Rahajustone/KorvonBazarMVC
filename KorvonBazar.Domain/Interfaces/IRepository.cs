using System;
using System.Linq.Expressions;

namespace KorvonBazar.Domain.Interfaces;

public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> All();
    Task<T> GetByIdAsync(Guid id);

    Task<bool> AddAsync(T entity);
    Task<bool> DeleteAsync(T entity);
    Task<bool> UpdateAsync(T entity);

    void Add(T entity);
    void Delete(T entity);
    void Update(T entity);

    IQueryable<T> List(Expression<Func<T, bool>> expression);
}

