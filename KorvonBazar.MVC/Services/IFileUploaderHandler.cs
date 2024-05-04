namespace KorvonBazar.Services;

public interface IFileUploaderHandler
{
	Task<string> SaveFileAsync(IFormFile file, string photoPathToUpload);
	string SaveFile(IFormFile file, string photoPathToUpload);

    Task<List<string>> SaveFilesAsync(IFormFileCollection file, string photoPathToUpload);
    List<string> SaveFiles(IFormFileCollection file, string photoPathToUpload);
}
