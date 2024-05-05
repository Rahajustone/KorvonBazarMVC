using System;
namespace KorvonBazar.Services;

public class FileUploaderHandler: IFileUploaderHandler
{
    private readonly IWebHostEnvironment _env;
    private readonly ILogger<FileUploaderHandler> _logger;

    public FileUploaderHandler(IWebHostEnvironment env, ILogger<FileUploaderHandler> logger)
    {
        _env = env;
        _logger = logger;
    }

    public string SaveFile(IFormFile file, string filePathToUpload)
    {
        string newFileName = filePathToUpload + "\\" + GetFileName(file, true);
        using (var fileStream = new FileStream(newFileName, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }

        return newFileName?? string.Empty;
    }

    public List<string> SaveFiles(IFormFileCollection files, string filePathToUpload)
    {
        List<string> filesPath = new List<string>();
        foreach (var file in files)
        {
            string filePath = SaveFile(file, filePathToUpload);
            filesPath.Add(filePath);
        }

        return filesPath;
    }

    public async Task<string> SaveFileAsync(IFormFile file, string? filePathToUpload=null)
    {
        string newFileDistination = _env.WebRootPath;
        string newFileName = GetFileName(file, true);

        if (!string.IsNullOrEmpty(filePathToUpload))
        {
            if (!Directory.Exists(Path.Combine(_env.WebRootPath, filePathToUpload)))
                Directory.CreateDirectory(Path.Combine(_env.WebRootPath, filePathToUpload));

            newFileName = Path.Combine(filePathToUpload, newFileName);
        }

        newFileDistination = Path.Join(newFileDistination, newFileName);
        using (var fileStream = new FileStream(newFileDistination, FileMode.Create))
        {
            await file.CopyToAsync(fileStream);
        }

        return newFileName ?? string.Empty;
    }

    public async Task<List<string>> SaveFilesAsync(IFormFileCollection files, string filePathToUpload)
    {
        List<string> filesPath = new List<string>();
        foreach (var file in files)
        {
            string filePath = await SaveFileAsync(file, filePathToUpload);
            filesPath.Add(filePath);
        }

        return filesPath;
    }

    private string GetFileName(IFormFile file, bool uniqueName)
    {
        FileInfo fileInfo = new FileInfo(file.FileName);

        string fileName = fileInfo.Name;
        string fileExtension = fileInfo.Extension;

        if (uniqueName)
            fileName = GetUniqueName() + fileExtension;
 
        return fileName;
    }

    private string GetUniqueName()
    {
        return Guid.NewGuid().ToString().Trim(new char[]{ ' ', '/', '-'});
    }

    private static bool IsFileExtensionAllowed(IFormFile file, string[] allowedExtension)
    {
        var extension = Path.GetExtension(file.FileName);
        return allowedExtension.Contains(extension);
    }

    private string GetUniqueName(string preFix)
    {
        string uName = preFix + DateTime.Now.ToString()
         .Replace("/", "-")
         .Replace(":", "-")
         .Replace(" ", string.Empty)
         .Replace("PM", string.Empty)
         .Replace("AM", string.Empty);         ;

        return uName;
    }
}
